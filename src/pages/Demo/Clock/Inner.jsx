import React, { useState, useEffect } from 'react';
import fix from '../fix'
import { array } from '../utils';
import '../english';
import './inner.scss';

const Inner = () => {

    const [year, setYear] = useState(2020);
    const [month, setMonth] = useState(1);
    const [day, setDay] = useState(1);
    const [week, setWeek] = useState(1);
    const [hour, setHour] = useState(12);
    const [minute, setMinute] = useState(1);
    const [second, setSecond] = useState(1);

    useEffect(() => {
        setTimeout(()=>{
          let time = new Date();
          setYear(time.getFullYear());
          setMonth(time.getMonth()+1);
          setDay(time.getDate());
          setWeek(time.getDay());
          setHour(time.getHours());
          setMinute(time.getMinutes());
          setSecond(time.getSeconds());
        },1000)
      })

    const numToBig = (num) => {
        //return String(num).toEnglish()
        //var zh = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
        var zh = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖', '拾']
        var res = "";
        if (num <= 10) {
          res = zh[num];
        } else if (num < 20) {
          var bits = num % 10;
          res = zh[10] + zh[bits];
        } else if (num < 70) {
          bits = num % 10;
          var decade = parseInt(num / 10);
          if (bits === 0) {
              res = zh[decade] + zh[10];
          } else {
              res = zh[decade] + zh[10] + zh[bits];
          }
        }
        return res;
    }

    var yearDay = new Date().getFullYear();
    var monthDay = new Date().getMonth()+1;
  
    function getDays(year, month){ //获取当月的天数
      month = parseInt(month,10);
      var d= new Date(year,month,0);
      return d.getDate()
    }

    return <div className='box' id='box'>
        <div className='year item'>
            <span>{year}</span>
        </div>
        {array(12).map((item,index)=>{
            return (
                <div key={index}
                    className={`month item ${index===(month-1)?"active":""}`}
                    style={{transform: `rotate(${30*(month-1-index) + fix('month') * 360}deg)`}}>
                {`${numToBig(item)}月`}
                </div>
            )
        })}

        {array(getDays(yearDay, monthDay)).map((item,index)=>{
          return (
            <div key={index}
                 className={`day item ${index===(day-1)?"active":""}`}
                 style={{transform: `rotate(${(360/getDays(yearDay, monthDay))*(day-1-index) + fix('day') * 360}deg)`}}>
              {`${numToBig(item)}日`}
            </div>
          )
        })}

        {array(7).map((item,index)=>{
          return (
            <div key={index}
            className={`week item ${index===(week-1)?"active":""}`}
            style={{transform: `rotate(${(360/7)*(week-1-index) + fix('week') * 360}deg)`}}>
              {`星期${numToBig(item)}`}
            </div>
          )
        })}

        {array(24).map((item,index)=>{
          return (
            <div key={index}
            className={`hour item ${index===(hour-1)?"active":""}`}
            style={{transform: `rotate(${(360/24)*(hour-1-index) + fix('hour') * 360}deg)`}}>
              {`${numToBig(item)}点`}
            </div>
          )
        })}
        {array(60).map((item,index)=>{
          return (
            <div key={index}
            className={`minute item ${index===(minute-1)?"active":""}`}
            style={{transform: `rotate(${(360/60)*(minute-1-index) + fix('minute') * 360}deg)`}}>
              {`${numToBig(item)}分`}
            </div>
          )
        })}
        {array(60).map((item,index)=>{
          return (
            <div key={index}
            className={`second item ${index===(second-1)?"active":""}`}
            style={{transform: `rotate(${(360/60)*(second-1-index) + fix('second') * 360}deg)`}}>
              {`${numToBig(item)}秒`}
            </div>
          )
        })}
        {/*language=SCSS*/}
        <style jsx>{`
            
            .box{
                position: relative;
                width: 800px;
                height: 800px;
                .item{
                    position: absolute;
                    top: 390px;
                    text-align: right;
                    transition: all .5s linear;
                    color:rgb(235,235,235);
                }
                .active{
                    font-size: 18px;
                    font-weight: bold;
                    color: orange;
                }
                .year {
                    width: 100%;
                    margin-top: -10px; 
                    font-size: 30px;
                    font-weight: bold;
                    text-align: center;
                    color: orange;
                }
                .month{
                    width: 200px;
                    right: 300px;
                }
                .day{
                    width: 480px;
                    right: 160px;
                }
                .week{
                    width: 340px;
                    right: 230px;
                }
                .hour{
                    width: 600px;
                    right: 100px;
                }
                .minute{
                    width: 780px;
                    right: 10px;
                }
                .second{
                    width: 940px;
                    right: -70px;
                }
            }
        
            @keyframes rotates {
                to {
                    transform: rotate(360deg);
                }
                from {
                    transform: rotate(0deg);
                }
            }
        `}</style>
    </div>
}

export default Inner;