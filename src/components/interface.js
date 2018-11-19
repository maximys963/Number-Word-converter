import React, {Component} from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.less'
class Interface extends Component {
    constructor(){
        super();
        this.state = {
            currentNumber: [],
            result: [],
            dictionary:{
                level1: [`нуль`,`один`,`два`, `три`, `чотири`,`п'ять`,`шість`,`сім`,`вісім`,`дев'ять`],
                level2: [`десять`,`одинадцять`,`дванадцять`,`тринадцять`,`чотирнадцять`,`п'ятнадцять`,`шістнадцять`,`сімнадцять`,`вісімнадцять`,`дев'ятнадцять`],
                level3: [`двадцять`,`тридцять`,`сорок`,`п'ятдисят`,`шістдесят`,`сімдесят`,`вісімдесят`,`дев'яносто`],
                level4: [`сто`,`двісті`,`триста`,`чотириста`,`п'ятсот`,`шістсот`,`сімсот`,`вісімсот`,`дев'ятсот`],
                level5: [`одна тисяча`,`тисячі`, `тисяч`],
                level6: [`мільйон`,`мільйони`,`мільйонів`]
            },
        };
    }

    secondLevelDetection(digit){
        console.log(digit);
        let firstLvlResult = null;
        if(digit === 0){
           firstLvlResult = this.state.dictionary.level2[0];
        }else if(digit === 1){
           firstLvlResult = this.state.dictionary.level2[1];
        }else if(digit === 2){
            firstLvlResult = this.state.dictionary.level2[2];
        }else if(digit === 3){
            firstLvlResult = this.state.dictionary.level2[3];
        }else if(digit === 4){
            firstLvlResult = this.state.dictionary.level2[4];
        }else if(digit === 5){
            firstLvlResult = this.state.dictionary.level2[5];
        }else if(digit === 6){
            firstLvlResult = this.state.dictionary.level2[6];
        }else if(digit === 7){
            firstLvlResult = this.state.dictionary.level2[7];
        }else if(digit === 8){
            firstLvlResult = this.state.dictionary.level2[8];
        }else if(digit === 9){
            firstLvlResult = this.state.dictionary.level2[9];
        }
        return(firstLvlResult)
    }


    firstLevelDetection(digit){
        console.log(digit);
        let secondLvlResult = null;
        if(digit === 0){
            secondLvlResult = this.state.dictionary.level1[0];
        }else if(digit === 1){
            secondLvlResult = this.state.dictionary.level1[1];
        }else if(digit === 2){
            secondLvlResult = this.state.dictionary.level1[2];
        }else if(digit === 3){
            secondLvlResult = this.state.dictionary.level1[3];
        }else if(digit === 4){
            secondLvlResult = this.state.dictionary.level1[4];
        }else if(digit === 5){
            secondLvlResult = this.state.dictionary.level1[5];
        }else if(digit === 6){
            secondLvlResult = this.state.dictionary.level1[6];
        }else if(digit === 7){
            secondLvlResult = this.state.dictionary.level1[7];
        }else if(digit === 8){
            secondLvlResult = this.state.dictionary.level1[8];
        }else if(digit === 9){
            secondLvlResult = this.state.dictionary.level1[9];
        }
        return(secondLvlResult)
    }

    thirdLevelDetection(digit){
        let thirdLvlResult = null;
        if(digit === 2){
            thirdLvlResult = this.state.dictionary.level3[0];
        }else if(digit === 3){
            thirdLvlResult = this.state.dictionary.level3[1];
        }else if(digit === 4){
            thirdLvlResult = this.state.dictionary.level3[2];
        }else if(digit === 5){
            thirdLvlResult = this.state.dictionary.level3[3];
        }else if(digit === 6){
            thirdLvlResult = this.state.dictionary.level3[4];
        }else if(digit === 7){
            thirdLvlResult = this.state.dictionary.level3[5];
        }else if(digit === 8){
            thirdLvlResult = this.state.dictionary.level3[6];
        }else if(digit === 9){
            thirdLvlResult = this.state.dictionary.level3[7];
        }
        return(thirdLvlResult)
    }


    fourthLevelDetection(digit){
        let fourthLvlResult = null;
        if(digit === 1){
            fourthLvlResult = this.state.dictionary.level4[0];
        }else if(digit === 2){
            fourthLvlResult = this.state.dictionary.level4[1];
        }else if(digit === 3){
            fourthLvlResult = this.state.dictionary.level4[2];
        }else if(digit === 4){
            fourthLvlResult = this.state.dictionary.level4[3];
        }else if(digit === 5){
            fourthLvlResult = this.state.dictionary.level4[4];
        }else if(digit === 6){
            fourthLvlResult = this.state.dictionary.level4[5];
        }else if(digit === 7){
            fourthLvlResult = this.state.dictionary.level4[6];
        }else if(digit === 8){
            fourthLvlResult = this.state.dictionary.level4[7];
        }else if(digit === 9){
            fourthLvlResult = this.state.dictionary.level4[8];
        }
        return(fourthLvlResult)
    }


    fifthLevelDetection(digit){
        let fifthLvlResult = null;
        if(digit === 1){
            fifthLvlResult = this.state.dictionary.level5[0];
        }else if(digit === 2){
            fifthLvlResult = this.state.dictionary.level5[1];
        }else if(digit === 3){
            fifthLvlResult = this.state.dictionary.level5[1];
        }else if(digit === 4){
            fifthLvlResult = this.state.dictionary.level5[1];
        }else if(digit === 5){
            fifthLvlResult = this.state.dictionary.level5[2];
        }else if(digit === 6){
            fifthLvlResult = this.state.dictionary.level5[2];
        }else if(digit === 7){
            fifthLvlResult = this.state.dictionary.level5[2];
        }else if(digit === 8){
            fifthLvlResult = this.state.dictionary.level5[2];
        }else if(digit === 9){
            fifthLvlResult = this.state.dictionary.level5[2];
        }
        return(fifthLvlResult)
    }


    threeDigitToggle(inputValueArrNumbers){
        let innerResultArr = [];
        console.log(inputValueArrNumbers);
        inputValueArrNumbers.forEach( (elem, index) =>{
            if(index === 0){
                innerResultArr[index] = this.fourthLevelDetection(inputValueArrNumbers[index])
            }else if(index === 1){
                innerResultArr.push(...this.twoDigitToggle(inputValueArrNumbers.slice(1,3)))
            }
        });
        console.log(`inner ResultArr = ${innerResultArr}`);
           return innerResultArr
    }

    twoDigitToggle(inputValueArrNumbers, ){
        let innerResultArr = [];
        if(inputValueArrNumbers[0] === 1){
            innerResultArr[0] = this.secondLevelDetection(inputValueArrNumbers[1]);
        }else if(inputValueArrNumbers[1] === 0){
            innerResultArr[0] = this.thirdLevelDetection(inputValueArrNumbers[0]);
        }else if(inputValueArrNumbers[0] === 0){
            innerResultArr[0] = this.firstLevelDetection(inputValueArrNumbers[1]);
        }else{
            inputValueArrNumbers.forEach( (elem, index) =>{
                if(index === 0 ){
                    innerResultArr[index] = this.thirdLevelDetection(elem);
                }else if(index === 1 ){
                    innerResultArr[index] = this.firstLevelDetection(elem);
                }
            })
        }
        return innerResultArr
    }

    oneDigitToggle(inputValueArrNumbers){
        let innerResultArr = [];
        inputValueArrNumbers.forEach((elem, index) => {
            innerResultArr[0] = this.firstLevelDetection(elem);
        });
        return innerResultArr
    }



    getValue(){
        let ResultArr = [];
        let inputValueArrStrings = document.getElementById('left-input').value.split('');
        let inputValueArrNumbers = [];
        inputValueArrStrings.forEach( elem => {
            inputValueArrNumbers.push(parseInt(elem));
        });
        if(inputValueArrNumbers.length === 1) {
            ResultArr = this.oneDigitToggle(inputValueArrNumbers)
        }else if(inputValueArrNumbers.length === 2){
            ResultArr = this.twoDigitToggle(inputValueArrNumbers);
        }else if(inputValueArrNumbers.length === 3){
            ResultArr = this.threeDigitToggle(inputValueArrNumbers)
        }
        console.log(ResultArr)
    }

    render() {
        return (
            <div className='container'>
                <Input placeholder="Basic usage" id='left-input' />
                <Button type="primary" onClick={() =>{this.getValue()}} >Primary</Button>
                <Input placeholder="Basic usage" />
            </div>
        );
    }
}

export default Interface;