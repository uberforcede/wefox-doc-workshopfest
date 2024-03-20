import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { QuotationRequestDto } from './dto/QuotationRequest.dto';
import { QuotationResponseDto } from './dto/QuotationResponse.dto';
import { QuotationDetailDto } from './dto/QuotationDetail.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/quotation')
  createQuotation(
    @Body() quotationForm: QuotationRequestDto,
  ): Promise<QuotationResponseDto> {
    return this.appService.createQuotation(quotationForm);
  }

  @Get('/quotation/:id')
  getQuotation(@Param('id') quotationId): Promise<QuotationDetailDto> {
    return this.appService.getQuotation(quotationId);
  }
}
