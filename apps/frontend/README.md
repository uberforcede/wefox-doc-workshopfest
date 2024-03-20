# Wefox@Codemotion Workshop fest

## Frontend Client

### Installation:

In the project root:

```
$ npm install
```

### Launch

```
$ npm run serve -w @workshopfest/frontend
```


<Message v-if="messageConfig.show" :severity="messageConfig.severity">{{ messageConfig.message }}</Message>


const messageConfig = ref({
  show: false,
  severity: 'info',
  message: ''
})