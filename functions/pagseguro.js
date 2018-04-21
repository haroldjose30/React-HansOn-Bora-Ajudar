const request = require('request-promise');
const parse = require('xml2js').parseString;

const cToken = 'CC1E598E13D14012A92FA0EABF0B6E9D';
const cEmail = 'haroldbarros@gmail.com'

const consultaNotificacao = 'https://ws.pagseguro.uol.com.br/v3/transactions/notifications/';
const notificationCode = '766B9C-AD4B044B04DA-77742F5FA653-E1AB24';

request(consultaNotificacao+notificationCode+'?email='+cEmail+'&token='+cToken)
.then( notificationXML => {
    console.log('consultaNotificacao-ok');
    parse(notificationXML, (err,transactionJson) => {
        const status = transactionJson.transaction.status[0]; 
        console.log(transactionJson);
    });
});

