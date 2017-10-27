function calculate(){
    var years,months,days,sum= 0,yeas;
    //输入年份
    years=prompt("请输入您的出生年份");
    //判断输入的年份是否正确
    while(years){
        if(isNaN(years)==false && years>=1){
            break;
        }else{
            years=prompt("输入有误，请输入您的出生年份");
        }
    }
    var yea=parseInt(years);

    //判断是不是闰年
    if(yea%4==0&&yea%100!=0||yea%400==0){
        leapYear=366;
    }else{
        leapYear=365;
    }

    //输入月份
    months=prompt("请输入您的出生月份");
    //判断输入的月份是否正确
    while(months){
        if(isNaN(months)==false && months>=1 && months<=12){
            break;
        }else{
            months=prompt("输入有误，请输入您的出生月份");
        }
    }
    var mon=parseInt(months);

    //输入日期
    days=prompt("请输入您的出生日期");
    //判断输入的日期是否正确
    while(days){
        if(isNaN(days)==true || days<=0 || days>=32){
            days=prompt("输入有误，请输入您的出生日期");
        }else{
            if((mon==4||mon==6||mon==9||mon==11)&&days<=30){
                break;
            }else if((mon==1||mon==3||mon==5||mon==7||mon==8||mon==10||mon==12)&&days<=31){
                break;
            }else if(mon==2 && leapYear==365 && days<=28){
                break;
            }else if(mon==2 && leapYear==366 && days<=29){
                break;
            }else{
                days=prompt("输入有误，请输入您的出生日期");
            }
        }
    }
    var day1=parseInt(days);

    /*如果是闰年，则二月有29天
    如果不是闰年，则二月有28天*/
    if(leapYear==366){
        var num=[31,29,31,30,31,30,31,31,30,31,30,31];
        for(var i=1;i<mon;i++){
            sum+=num[i-1];
        }
        sum+=day1;
    }else{
        var num=[31,28,31,30,31,30,31,31,30,31,30,31];
        for (var j=1;j<mon;j++){
            sum+=num[j-1];
        }
        sum+=day1;
    }
    document.write("您的生日在"+yea+"年是第"+sum+"天");
}
//封装的函数调用
calculate();
