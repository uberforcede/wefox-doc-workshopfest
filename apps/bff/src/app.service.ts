/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { QuotationRequestDto } from './dto/QuotationRequest.dto';
import { QuotationResponseDto } from './dto/QuotationResponse.dto';
import { QuotationDetailDto } from './dto/QuotationDetail.dto';
import { HttpService } from '@nestjs/axios';
import { getRequest, postRequest } from './rest.utils';
import { plainToClass } from 'class-transformer';
import { VehicleDto } from './dto/Vehicle.dto';
import { InsuranceDto } from './dto/Insurance.dto';
import { QuoteResponseDto } from './dto/QuoteResponse.dto';
import { QuoteRequestDto } from './dto/QuoteRequest.dto';
import { EmailResponseDto } from './dto/EmailResponse.dto';
import { EmailRequestDto } from './dto/EmailRequest.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  private DB: Map<string, QuotationDetailDto>;

  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.DB = new Map();
  }

  async getFromVehicleService(plate: string): Promise<VehicleDto> {
    return getRequest(
      this.httpService,
      `http://${this.configService.get<string>('VEHICLE_SERVICE')}/vehicle/${plate}`,
    ).then((data) => plainToClass(VehicleDto, data));
  }

  async getFromInsuranceService(
    plate: string,
    birth: Date,
  ): Promise<InsuranceDto> {
    return getRequest(
      this.httpService,
      `http://${this.configService.get<string>('INSURANCE_SERVICE')}/insurance/${plate}/${birth}`,
    ).then((data) => plainToClass(InsuranceDto, data));
  }

  async postQuotation(
    plate: string,
    birth: Date,
    vehicleInfo: VehicleDto,
    insuranceInfo: InsuranceDto,
  ): Promise<QuoteResponseDto> {
    const quote: QuoteRequestDto = new QuoteRequestDto();
    quote.birthdate = birth;
    quote.plate = plate;
    quote.vehicle = vehicleInfo;
    quote.insurance = insuranceInfo;
    return postRequest(
      this.httpService,
      `http://${this.configService.get<string>('QUOTATION_SERVICE')}/quote`,
      quote,
    ).then((data) => plainToClass(QuoteResponseDto, data));
  }

  async sendEmail(quotationId: string): Promise<EmailResponseDto> {
    const emailReq: EmailRequestDto = new EmailRequestDto();
    emailReq.quotationId = quotationId;
    return postRequest(
      this.httpService,
      `http://${this.configService.get<string>('EMAIL_SERVICE')}/mail`,
      {
        id: quotationId,
      },
    ).then((data) => plainToClass(EmailResponseDto, data));
  }

  private _save(
    quotationData: QuotationRequestDto,
    vehicleInfo: VehicleDto,
    insuranceInfo: InsuranceDto,
    quotationInfo: QuoteResponseDto,
    emailInfo: EmailResponseDto,
  ) {
    const quotation: QuotationDetailDto = new QuotationDetailDto();
    quotation.plate = quotationData.plate;
    quotation.birthdate = new Date(quotationData.birthdate);

    quotation.vehicle = vehicleInfo;
    quotation.insurance = insuranceInfo;

    quotation.quotationId = quotationInfo.quotationId;
    quotation.price = quotationInfo.price;
    quotation.status = quotationInfo.status;
    quotation.expireDate = quotationInfo.expireDate;

    quotation.notificationStatus = emailInfo.status;

    this.logger.log(`Saving Quotation ${quotation.quotationId}`);
    this.DB.set(quotation.quotationId, quotation);
  }

  async createQuotation(
    quotationData: QuotationRequestDto,
  ): Promise<QuotationResponseDto> {
    this.logger.log('Creating quotation');
    // retrive vehicle data
    const vehicleInfo: VehicleDto = await this.getFromVehicleService(
      quotationData.plate,
    );

    // retrive insurance data
    const insuranceInfo: InsuranceDto = await this.getFromInsuranceService(
      quotationData.plate,
      quotationData.birthdate,
    );

    // create quotation
    const quotationInfo: QuoteResponseDto = await this.postQuotation(
      quotationData.plate,
      quotationData.birthdate,
      vehicleInfo,
      insuranceInfo,
    );

    // Send notification email
    const emailInfo: EmailResponseDto = await this.sendEmail(
      quotationInfo.quotationId,
    );

    // demo only -->
    this._save(
      quotationData,
      vehicleInfo,
      insuranceInfo,
      quotationInfo,
      emailInfo,
    );
    // -->

    const response = new QuotationResponseDto();
    response.quotationId = quotationInfo.quotationId;
    return response;
  }

  async getQuotation(quotationId: string): Promise<QuotationDetailDto> {
    this.logger.log(`Get Quotation ${quotationId}`);
    const result = this.DB.get(quotationId);
    return Promise.resolve(result);
  }
}
