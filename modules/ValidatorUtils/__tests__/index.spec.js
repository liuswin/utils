import {rules} from '../index'

describe('验证方法测试正确性', () => {
    beforeEach(() => {

    })
    describe('验证checkIP正确性', () => {
        const testData = [{
            ip: '192.168.1.1',
            result: undefined
        },{
            ip: '192.1',
            result: "Ip地址不正确"
        },{
            ip: '1.1.1.1',
            result: undefined
        },{
            ip: '190.168.0.0.0',
            result: "Ip地址不正确"
        }]
        // for(let i=0;i<testData.length;i++){
        //     it(`checkIP[${testData[i].ip}]`, (done) => { 
        //         rules.checkIP('',testData[i].ip,(args)=>{
        //             expect(args).toEqual(testData[i].result)
        //             done()
        //         })
        //     })
        // }
        it(`checkIP[${testData[0].ip}]`, (done) => { 
            rules.checkIP('',testData[0].ip,(args)=>{
                expect(args).toEqual(testData[0].result)
                done()
            })
        })
        it(`checkIP[${testData[1].ip}]`, (done) => { 
            rules.checkIP('',testData[1].ip,(args)=>{
                expect(args).toEqual(testData[1].result)
                done()
            })
        })
        it(`checkIP[${testData[2].ip}]`, (done) => { 
            rules.checkIP('',testData[2].ip,(args)=>{
                expect(args).toEqual(testData[2].result)
                done()
            })
        })
        it(`checkIP[${testData[3].ip}]`, (done) => { 
            rules.checkIP('',testData[3].ip,(args)=>{
                expect(args).toEqual(testData[3].result)
                done()
            })
        })
    })

    describe('验证validatePort正确性', () => {
        const testData = [{
            port: 'a',
            result: "请输入正确的端口"
        },{
            port: '1234',
            result: undefined
        },{
            port: '65536',
            result: "请输入正确的端口"
        },{
            port: '-8080',
            result: "请输入正确的端口"
        },{
            port: '0',
            result: "请输入正确的端口"
        },{
            port: '65535',
            result: undefined
        },{
            port: '1.5',
            result: "请输入正确的端口"
        }]
        // for(let i=0;i<testData.length;i++){
        //     it(`validatePort[${testData[i].port}]`, (done) => { 
        //         rules.validatePort('',testData[i].port,(args)=>{
        //             expect(args).toEqual(testData[i].result)
        //             done()
        //         })
        //     })
        // }
        it(`validatePort[${testData[0].port}]`, (done) => { 
            rules.validatePort('',testData[0].port,(args)=>{
                expect(args).toEqual(testData[0].result)
                done()
            })
        })
        it(`validatePort[${testData[1].port}]`, (done) => { 
            rules.validatePort('',testData[1].port,(args)=>{
                expect(args).toEqual(testData[1].result)
                done()
            })
        })
        it(`validatePort[${testData[2].port}]`, (done) => { 
            rules.validatePort('',testData[2].port,(args)=>{
                expect(args).toEqual(testData[2].result)
                done()
            })
        })
        it(`validatePort[${testData[3].port}]`, (done) => { 
            rules.validatePort('',testData[3].port,(args)=>{
                expect(args).toEqual(testData[3].result)
                done()
            })
        })
        it(`validatePort[${testData[4].port}]`, (done) => { 
            rules.validatePort('',testData[4].port,(args)=>{
                expect(args).toEqual(testData[4].result)
                done()
            })
        })
        it(`validatePort[${testData[5].port}]`, (done) => { 
            rules.validatePort('',testData[5].port,(args)=>{
                expect(args).toEqual(testData[5].result)
                done()
            })
        })
        it(`validatePort[${testData[6].port}]`, (done) => { 
            rules.validatePort('',testData[6].port,(args)=>{
                expect(args).toEqual(testData[6].result)
                done()
            })
        })
    })

    describe('验证checkIPCust正确性', () => {
        const testData = [{
            ip: 'a.b.c',
            result: undefined
        },{
            ip: 'a.b.com',
            result: "Ip地址不正确"
        },{
            ip: '1.1.1.1',
            result: undefined
        },{
            ip: '190.168.0.0.0',
            result: undefined
        }]
        it(`checkIPCust[${testData[0].ip}]`, (done) => { 
            rules.checkIPCust('',testData[0].ip,(args)=>{
                expect(args).toEqual(testData[0].result)
                done()
            })
        })
        it(`checkIPCust[${testData[1].ip}]`, (done) => { 
            rules.checkIPCust('',testData[1].ip,(args)=>{
                expect(args).toEqual(testData[1].result)
                done()
            })
        })
        it(`checkIPCust[${testData[2].ip}]`, (done) => { 
            rules.checkIPCust('',testData[2].ip,(args)=>{
                expect(args).toEqual(testData[2].result)
                done()
            })
        })
        it(`checkIPCust[${testData[3].ip}]`, (done) => { 
            rules.checkIPCust('',testData[3].ip,(args)=>{
                expect(args).toEqual(testData[3].result)
                done()
            })
        })
    })

    describe('验证validateToNextPassword正确性', () => {
        const testData = [{
            value: '12345',
            result: undefined
        },{
            value: '0',
            result: undefined
        },{
            value: '*&',
            result: '请不要输入非法字符'
        },{
            value: '_',
            result: undefined
        }]
        it(`validateToNextPassword[${testData[0].value}]`, (done) => { 
            rules.validateToNextPassword('',testData[0].value,(args)=>{
                expect(args).toEqual(testData[0].result)
                done()
            })
        })
        it(`validateToNextPassword[${testData[1].value}]`, (done) => { 
            rules.validateToNextPassword('',testData[1].value,(args)=>{
                expect(args).toEqual(testData[1].result)
                done()
            })
        })
        it(`validateToNextPassword[${testData[2].value}]`, (done) => { 
            rules.validateToNextPassword('',testData[2].value,(args)=>{
                expect(args).toEqual(testData[2].result)
                done()
            })
        })
        it(`validateToNextPassword[${testData[3].value}]`, (done) => { 
            rules.validateToNextPassword('',testData[3].value,(args)=>{
                expect(args).toEqual(testData[3].result)
                done()
            })
        })
    })

    describe('验证checkWeekPassword正确性', () => {
        const testData = [{
            value: '123456',
            result: '密码为弱密码！'
        },{
            value: '1234567',
            result: undefined
        },{
            value: '12345',
            result: '密码为弱密码！'
        },{
            value: '*&',
            result: undefined
        },{
            value: '_',
            result: undefined
        }]
        it(`checkWeekPassword[${testData[0].value}]`, (done) => { 
            rules.checkWeekPassword('',testData[0].value,(args)=>{
                expect(args).toEqual(testData[0].result)
                done()
            })
        })
        it(`checkWeekPassword[${testData[1].value}]`, (done) => { 
            rules.checkWeekPassword('',testData[1].value,(args)=>{
                expect(args).toEqual(testData[1].result)
                done()
            })
        })
        it(`checkWeekPassword[${testData[2].value}]`, (done) => { 
            rules.checkWeekPassword('',testData[2].value,(args)=>{
                expect(args).toEqual(testData[2].result)
                done()
            })
        })
        it(`checkWeekPassword[${testData[3].value}]`, (done) => { 
            rules.checkWeekPassword('',testData[3].value,(args)=>{
                expect(args).toEqual(testData[3].result)
                done()
            })
        })
        it(`checkWeekPassword[${testData[4].value}]`, (done) => { 
            rules.checkWeekPassword('',testData[4].value,(args)=>{
                expect(args).toEqual(testData[4].result)
                done()
            })
        })
    })

    describe('验证checkMobile正确性', () => {
        const testData = [{
            value: '12345678991',
            result: undefined
        },{
            value: '00123546921',
            result: '手机号码格式不正确！'
        },{
            value: '18868832053',
            result: undefined
        },{
            value: '1886883205a',
            result: '手机号码格式不正确！'
        },{
            value: '188688320533',
            result: '手机号码格式不正确！'
        }]
        it(`checkMobile[${testData[0].value}]`, (done) => { 
            rules.checkMobile('',testData[0].value,(args)=>{
                expect(args).toEqual(testData[0].result)
                done()
            })
        })
        it(`checkMobile[${testData[1].value}]`, (done) => { 
            rules.checkMobile('',testData[1].value,(args)=>{
                expect(args).toEqual(testData[1].result)
                done()
            })
        })
        it(`checkMobile[${testData[2].value}]`, (done) => { 
            rules.checkMobile('',testData[2].value,(args)=>{
                expect(args).toEqual(testData[2].result)
                done()
            })
        })
        it(`checkMobile[${testData[3].value}]`, (done) => { 
            rules.checkMobile('',testData[3].value,(args)=>{
                expect(args).toEqual(testData[3].result)
                done()
            })
        })
        it(`checkMobile[${testData[4].value}]`, (done) => { 
            rules.checkMobile('',testData[4].value,(args)=>{
                expect(args).toEqual(testData[4].result)
                done()
            })
        })
    })

    describe('验证checkIDCard正确性', () => {
        const testData = [{
            value: '12345678991',
            result: '身份证号码格式不正确！'
        },{
            value: '330681199307108533',
            result: undefined
        },{
            value: '33068119930710853x',
            result: undefined
        },{
            value: '33068119930710853a',
            result: '身份证号码格式不正确！'
        }]
        it(`checkIDCard[${testData[0].value}]`, (done) => { 
            rules.checkIDCard('',testData[0].value,(args)=>{
                expect(args).toEqual(testData[0].result)
                done()
            })
        })
        it(`checkIDCard[${testData[1].value}]`, (done) => { 
            rules.checkIDCard('',testData[1].value,(args)=>{
                expect(args).toEqual(testData[1].result)
                done()
            })
        })
        it(`checkIDCard[${testData[2].value}]`, (done) => { 
            rules.checkIDCard('',testData[2].value,(args)=>{
                expect(args).toEqual(testData[2].result)
                done()
            })
        })
        it(`checkIDCard[${testData[3].value}]`, (done) => { 
            rules.checkIDCard('',testData[3].value,(args)=>{
                expect(args).toEqual(testData[3].result)
                done()
            })
        })
    })

    describe('验证ranges正确性', () => {
        const testData = [{
            range: {
                ranges: [0,100]
            },
            value: '50',
            result: undefined
        },{
            range: {
                ranges: [0,100]
            },
            value: '101',
            result: '请输入区间值[0,100]'
        },{
            range: {
                ranges: [0,100]
            },
            value: 'a',
            result: undefined
        }]
        it(`ranges[${testData[0].value}]`, (done) => { 
            rules.ranges(testData[0].range,testData[0].value,(args)=>{
                expect(args).toEqual(testData[0].result)
                done()
            })
        })
        it(`ranges[${testData[1].value}]`, (done) => { 
            rules.ranges(testData[1].range,testData[1].value,(args)=>{
                expect(args).toEqual(testData[1].result)
                done()
            })
        })
        it(`ranges[${testData[2].value}]`, (done) => { 
            rules.ranges(testData[2].range,testData[2].value,(args)=>{
                expect(args).toEqual(testData[2].result)
                done()
            })
        })
    })

    describe('验证fileSize正确性', () => {
        const testData = [{
            fileSizeData: {
                fileSize: 100
            },
            file: {
                size: 50
            },
            result: undefined
        },{
            fileSizeData: {
                fileSize: 100
            },
            file: {
                size: '50'
            },
            result: undefined
        },{
            fileSizeData: {
                fileSize: 100
            },
            file: {
                size: 101
            },
            result: "文件大小不超过 100"
        },{
            fileSizeData: {
                fileSize: 100
            },
            file: {
                size: 'a'
            },
            result: undefined
        }]
        it(`fileSize[${testData[0].file.size}]`, (done) => { 
            rules.fileSize(testData[0].fileSizeData,testData[0],(args)=>{
                expect(args).toEqual(testData[0].result)
                done()
            })
        })
        it(`fileSize[${testData[1].file.size}]`, (done) => { 
            rules.fileSize(testData[1].fileSizeData,testData[1],(args)=>{
                expect(args).toEqual(testData[1].result)
                done()
            })
        })
        it(`fileSize[${testData[2].file.size}]`, (done) => { 
            rules.fileSize(testData[2].fileSizeData,testData[2],(args)=>{
                expect(args).toEqual(testData[2].result)
                done()
            })
        })
        it(`fileSize[${testData[3].file.size}]`, (done) => { 
            rules.fileSize(testData[3].fileSizeData,testData[3],(args)=>{
                expect(args).toEqual(testData[3].result)
                done()
            })
        })
    })

    describe('验证integer正确性', () => {
        const testData = [{
            value: '123456',
            result: undefined
        },{
            value: '*&',
            result: "必须为正整数！"
        },{
            value: [1,2,3],
            result: undefined
        },{
            value: ['a','b','c'],
            result: "必须为正整数！"
        },{
            value: '_',
            result: "必须为正整数！"
        }]
        it(`integer[${testData[0].value}]`, (done) => { 
            rules.integer('',testData[0].value,(args)=>{
                expect(args).toEqual(testData[0].result)
                done()
            })
        })
        it(`integer[${testData[1].value}]`, (done) => { 
            rules.integer('',testData[1].value,(args)=>{
                expect(args).toEqual(testData[1].result)
                done()
            })
        })
        it(`integer[${testData[2].value}]`, (done) => { 
            rules.integer('',testData[2].value,(args)=>{
                expect(args).toEqual(testData[2].result)
                done()
            })
        })
        it(`integer[${testData[3].value}]`, (done) => { 
            rules.integer('',testData[3].value,(args)=>{
                expect(args).toEqual(testData[3].result)
                done()
            })
        })
        it(`integer[${testData[4].value}]`, (done) => { 
            rules.integer('',testData[4].value,(args)=>{
                expect(args).toEqual(testData[4].result)
                done()
            })
        })
    })

    describe('验证maxLength正确性', () => {
        const testData = [{
            rule: {
                value: 10
            },
            value: [1,2,3,4,5,6,7,8,9,10,11],
            result: "不能大于10项"
        },{
            rule: {
                value: 10
            },
            value: '123456789abc',
            result: "不能大于10项"
        },{
            rule: {
                value: 10
            },
            value: [1,2,3],
            result: undefined
        },{
            rule: {
                value: 10
            },
            value: ['a','b','c'],
            result: undefined
        }]
        it(`maxLength[${testData[0].value}]`, (done) => { 
            rules.maxLength(testData[0].rule,testData[0].value,(args)=>{
                expect(args).toEqual(testData[0].result)
                done()
            })
        })
        it(`maxLength[${testData[1].value}]`, (done) => { 
            rules.maxLength(testData[0].rule,testData[1].value,(args)=>{
                expect(args).toEqual(testData[1].result)
                done()
            })
        })
        it(`maxLength[${testData[2].value}]`, (done) => { 
            rules.maxLength(testData[0].rule,testData[2].value,(args)=>{
                expect(args).toEqual(testData[2].result)
                done()
            })
        })
        it(`maxLength[${testData[3].value}]`, (done) => { 
            rules.maxLength(testData[0].rule,testData[3].value,(args)=>{
                expect(args).toEqual(testData[3].result)
                done()
            })
        })
    })

    describe('验证tagMaxLength正确性', () => {
        const testData = [{
            value: '1,2,3,4,5,6',
            result: "备注标签最多5项"
        },{
            value: '123456',
            result: undefined
        },{
            value: '_,_,_,_,_',
            result: undefined
        }]
        it(`tagMaxLength[${testData[0].value}]`, (done) => { 
            rules.tagMaxLength('',testData[0].value,(args)=>{
                expect(args).toEqual(testData[0].result)
                done()
            })
        })
        it(`tagMaxLength[${testData[1].value}]`, (done) => { 
            rules.tagMaxLength('',testData[1].value,(args)=>{
                expect(args).toEqual(testData[1].result)
                done()
            })
        })
        it(`tagMaxLength[${testData[2].value}]`, (done) => { 
            rules.tagMaxLength('',testData[2].value,(args)=>{
                expect(args).toEqual(testData[2].result)
                done()
            })
        })
    })

    // describe.only('验证dateRangePicked正确性', () => {
    //     const testData = [{
    //         rule: {
    //             days: 5
    //         },
    //         value: [{days: [1,5]},{days: [1,6]}],
    //         result: "备注标签最多5项"
    //     },{
    //         rule: {
    //             days: 5
    //         },
    //         value: [{days: '1'},{days: '7'}],
    //         result: undefined
    //     },{
    //         rule: {
    //             days: 5
    //         },
    //         value: [{days: '7'},{days: '1'}],
    //         result: undefined
    //     },{
    //         rule: {
    //             days: 5
    //         },
    //         value: [{days: '-7'},{days: '1'}],
    //         result: undefined
    //     }]
    //     it(`dateRangePicked[${testData[0].value}]`, (done) => { 
    //         rules.dateRangePicked(testData[0].rule,testData[0].value,(args)=>{
    //             expect(args).toEqual(testData[0].result)
    //             done()
    //         })
    //     })
    //     it(`dateRangePicked[${testData[1].value}]`, (done) => { 
    //         rules.dateRangePicked(testData[1].rule,testData[1].value,(args)=>{
    //             expect(args).toEqual(testData[1].result)
    //             done()
    //         })
    //     })
    //     it(`dateRangePicked[${testData[2].value}]`, (done) => { 
    //         rules.dateRangePicked(testData[2].rule,testData[2].value,(args)=>{
    //             expect(args).toEqual(testData[2].result)
    //             done()
    //         })
    //     })
    //     it(`dateRangePicked[${testData[3].value}]`, (done) => { 
    //         rules.dateRangePicked(testData[3].rule,testData[3].value,(args)=>{
    //             expect(args).toEqual(testData[3].result)
    //             done()
    //         })
    //     })
    // })
})