/*
const levels = { 
    error: 0, 
    warn: 1, 
    info: 2, 
    verbose: 3, 
    debug: 4, 
    silly: 5 
  };
*/

var winston = require('winston');    				// 로그 처리 모듈
var winstonDaily = require('winston-daily-rotate-file');    	// 로그 일별 처리 모듈
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
// Date Format 선택
// moment 모듈 설치 필요
function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ'); // '2018-01-01 12:12:12.500 +0900'
};

// Date Format 수정
const tsFormat = () => (new Date()).toLocaleTimeString();      // '2018-01-01'



const myFormat = printf(info => {
    //return info.timestamp +','+ info.label +','+ info.level +','+ info.message +','+ 'this my format!!';
    var currentTime = new Date();
    return '{' + ' Level : ' + info.level +','+ ' Message : ' + info.message +','+ currentTime + ' This my format' + '}';
});
    
// 로그 설정
var logger = winston.createLogger({
    transports: [
        new (winstonDaily)({                                        // 로그 파일 설정
                name: 'info-file',
                filename: '../../logs/app_%DATE%.log',              // 파일 이름 (아래 설정한 날짜 형식이 %DATE% 위치에 들어간다)
                datePattern: 'YYYY-MM-DD',                          // 날짜 형식 (대문자여야 적용된다.)
                colorize: false,
                maxsize: 50000000,                                  // 로그 파일 하나의 용량 제한
                maxFiles: 1000,                                     // 로그 파일 개수 제한
                level: 'info', // info이상 파일 출력                 // 로그 레벨 지정
                showLevel: true,
                format: myFormat,                                   // 포맷설정!! 위의 myFormat 참조
                json: false,
                //timestamp: timeStampFormat                          // 저장될 시간 형식
                timestamp: tsFormat                       // 저장될 시간 형식
            }),
        new (winston.transports.Console)({                          // 콘솔 출력
                name: 'debug-console',
                colorize: true,
                level: 'debug', // debug이상 콘솔 출력
                showLevel: true,
                json: false,
                //formatter: _customFormatter,
                timestamp: timeStampFormat
        })     
    ],
    exceptionHandlers: [                                                  // uncaughtException 발생시 처리
        new (winstonDaily)({
                name: 'exception-file',
                filename: '../../logs/exception_%DATE%.log',
                datePattern: 'YYYY-MM-DD',
                colorize: false,
                maxsize: 50000000,
                maxFiles: 1000,
                level: 'error',
                showLevel: true,
                json: false,
                timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
                name: 'exception-console',
                colorize: true,
                level: 'debug',
                showLevel: true,
                json: false,
                timestamp: timeStampFormat
        })     
    ]
});


// 원하는 위치에 로그 삽입
//...................
logger.info('Hello, winston');
//...................


module.exports=logger;