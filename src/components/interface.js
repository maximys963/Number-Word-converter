import React, {Component} from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.less'
const { TextArea } = Input;
class Interface extends Component {
    constructor(){
        super();
        this.state = {
            currentNumber: [],
            result: [],
            dictionary:{
                levelMinus4: ['одна десятитисячна','дві десятитисячні','десятитисячні','десятитисячних'],
                levelMinus3: ['одна тисячна', 'дві тисячні', 'тисячні', 'тисячних'],
                levelMinus2: ['одна сота', 'дві соті', 'соті', 'сотих'],
                levelMinus1: [`одна десята`,`дві десяті`,`десяті`,`десятих`],
                level0: [`одна ціла`,`дві цілі`,`цілі`,`цілих`],
                level1: [`нуль`,`один`,`два`, `три`, `чотири`,`п'ять`,`шість`,`сім`,`вісім`,`дев'ять`],
                level2: [`десять`,`одинадцять`,`дванадцять`,`тринадцять`,`чотирнадцять`,`п'ятнадцять`,`шістнадцять`,`сімнадцять`,`вісімнадцять`,`дев'ятнадцять`],
                level3: [`двадцять`,`тридцять`,`сорок`,`п'ятдисят`,`шістдесят`,`сімдесят`,`вісімдесят`,`дев'яносто`],
                level4: [`сто`,`двісті`,`триста`,`чотириста`,`п'ятсот`,`шістсот`,`сімсот`,`вісімсот`,`дев'ятсот`],
                level5: [`одна тисяча`,`дві тисячі`,`тисячі`, `тисяч`],
                level6: [`мільйон`,`мільйони`,`мільйонів`]
            },
        };
    }
    minusfourthLevelDetection(digit){
        let minusFouthLvlResult = null;
        if(digit === 0){
            minusFouthLvlResult = this.state.dictionary.levelMinus4[3];
        }else if(digit === 1){
            minusFouthLvlResult = this.state.dictionary.levelMinus4[0];
        }else if(digit === 2){
            minusFouthLvlResult = this.state.dictionary.levelMinus4[1];
        }else if(digit === 3 || digit === 4){
            minusFouthLvlResult = this.state.dictionary.levelMinus4[2];
        }else if(digit > 4 || digit < 10){
            minusFouthLvlResult = this.state.dictionary.levelMinus4[3];
        }
        return(minusFouthLvlResult)
    }


    minusthirdLevelDetection(digit){
        let minusThirdLvlResult = null;
        if(digit === 0){
            minusThirdLvlResult = this.state.dictionary.levelMinus3[3];
        }else if(digit === 1){
            minusThirdLvlResult = this.state.dictionary.levelMinus3[0];
        }else if(digit === 2){
            minusThirdLvlResult = this.state.dictionary.levelMinus3[1];
        }else if(digit === 3 || digit === 4){
            minusThirdLvlResult = this.state.dictionary.levelMinus3[2];
        }else if(digit > 4 || digit < 10){
            minusThirdLvlResult = this.state.dictionary.levelMinus3[3];
        }
        return(minusThirdLvlResult)
    }


    minussecondLevelDetection(digit){
        let minusSecondLvlResult = null;
        if(digit === 0){
            minusSecondLvlResult = this.state.dictionary.levelMinus2[3];
        }else if(digit === 1){
            minusSecondLvlResult = this.state.dictionary.levelMinus2[0];
        }else if(digit === 2){
            minusSecondLvlResult = this.state.dictionary.levelMinus2[1];
        }else if(digit === 3 || digit === 4){
            minusSecondLvlResult = this.state.dictionary.levelMinus2[2];
        }else if(digit > 4 || digit < 10){
            minusSecondLvlResult = this.state.dictionary.levelMinus2[3];
        }
        return(minusSecondLvlResult)
    }

    minusfirstLevelDetection(digit){
        let minusfirstLvlResult = null;
        if(digit === 0){
            minusfirstLvlResult = this.state.dictionary.levelMinus1[3];
        }else if(digit === 1){
            minusfirstLvlResult = this.state.dictionary.levelMinus1[0];
        }else if(digit === 2){
            minusfirstLvlResult = this.state.dictionary.levelMinus1[1];
        }else if(digit === 3 || digit === 4){
            minusfirstLvlResult = this.state.dictionary.levelMinus1[2];
        }else if(digit > 4 || digit < 10){
            minusfirstLvlResult = this.state.dictionary.levelMinus1[3];
        }
        return(minusfirstLvlResult)
    }

    zeroLevelDetection(digit){
        console.log(digit);
        let zeroLvlResult = null;
        if(digit === 0){
            zeroLvlResult = this.state.dictionary.level0[3];
        }else if(digit === 1){
            zeroLvlResult = this.state.dictionary.level0[0];
        }else if(digit === 2){
            zeroLvlResult = this.state.dictionary.level0[1];
        }else if(digit === 3 || digit === 4){
            zeroLvlResult = this.state.dictionary.level0[2];
        }else if(digit > 4 || digit < 10){
            zeroLvlResult = this.state.dictionary.level0[3];
        }
        return(zeroLvlResult)
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
        if(digit === 0){
            fifthLvlResult = this.state.dictionary.level5[3];
        }else if(digit === 1){
            fifthLvlResult = this.state.dictionary.level5[0];
        }else if(digit === 2){
            fifthLvlResult = this.state.dictionary.level5[1];
        }else if(digit === 3){
            fifthLvlResult = this.state.dictionary.level5[2];
        }else if(digit === 4){
            fifthLvlResult = this.state.dictionary.level5[2];
        }else if(digit === 5){
            fifthLvlResult = this.state.dictionary.level5[3];
        }else if(digit === 6){
            fifthLvlResult = this.state.dictionary.level5[3];
        }else if(digit === 7){
            fifthLvlResult = this.state.dictionary.level5[3];
        }else if(digit === 8){
            fifthLvlResult = this.state.dictionary.level5[3];
        }else if(digit === 9){
            fifthLvlResult = this.state.dictionary.level5[3];
        }
        return(fifthLvlResult)
    }

    sixthLevelDetection(digit){
        let sixthLvlResult = null;
        if(digit === 0){
            sixthLvlResult = this.state.dictionary.level6[2];
        }else if(digit === 1){
            sixthLvlResult = this.state.dictionary.level6[0];
        }else if(digit === 2){
            sixthLvlResult = this.state.dictionary.level6[1];
        }else if(digit === 3){
            sixthLvlResult = this.state.dictionary.level6[1];
        }else if(digit === 4){
            sixthLvlResult = this.state.dictionary.level6[1];
        }else if(digit === 5){
            sixthLvlResult = this.state.dictionary.level6[2];
        }else if(digit === 6){
            sixthLvlResult = this.state.dictionary.level6[2];
        }else if(digit === 7){
            sixthLvlResult = this.state.dictionary.level6[2];
        }else if(digit === 8){
            sixthLvlResult = this.state.dictionary.level6[2];
        }else if(digit === 9){
            sixthLvlResult = this.state.dictionary.level6[2];
        }
        return(sixthLvlResult)
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
    thousandsToggle(inputValueArrNumbers){
        let firstPart = [];
        let secondPart = [];
        let innerResultArr = [];
        secondPart = inputValueArrNumbers.splice(inputValueArrNumbers.length -3, inputValueArrNumbers.length);
        firstPart = inputValueArrNumbers.slice(0, inputValueArrNumbers.length);
        console.log(firstPart);
        console.log(secondPart);
        if(firstPart.length === 1 && firstPart[0] !== 1 && firstPart[0] !== 2 ){
            innerResultArr = this.oneDigitToggle(firstPart)
        }else if(firstPart.length === 2){
            if(firstPart[1] === 1){
               innerResultArr.push(...this.twoDigitToggle([firstPart[0],0]))
            }else if(firstPart[1] === 2){
                innerResultArr.push(...this.twoDigitToggle([firstPart[0],0]))
            }else{
                innerResultArr = this.twoDigitToggle(firstPart)
            }
        }else if(firstPart.length === 3){

            if(firstPart[2] === 1 && firstPart[1] !== 1){
                innerResultArr.push(...this.threeDigitToggle([firstPart[0],firstPart[1],0]))
            }else if(firstPart[2] === 2 && firstPart[1] !== 1){
                innerResultArr.push(...this.threeDigitToggle([firstPart[0],firstPart[1],0]))
            }else{
                innerResultArr = this.threeDigitToggle(firstPart)
            }
        }
        if(firstPart[firstPart.length - 2] === 1){
            innerResultArr.push(this.fifthLevelDetection(5));
        }else{
            innerResultArr.push(this.fifthLevelDetection(firstPart[firstPart.length - 1]));
        }
        // innerResultArr.push(this.fifthLevelDetection(firstPart[firstPart.length - 1]));
        innerResultArr.push(...this.threeDigitToggle(secondPart));

        return innerResultArr
    }

    millionToggle(inputValueArrNumbers){
        let firstPart = [];
        let secondPart = [];
        let innerResultArr = [];
        secondPart = inputValueArrNumbers.splice(inputValueArrNumbers.length -6, inputValueArrNumbers.length);
        firstPart = inputValueArrNumbers.slice(0, inputValueArrNumbers.length);
        if(firstPart.length === 1){
           innerResultArr = this.oneDigitToggle(firstPart);
        }else if(firstPart.length === 2){
            innerResultArr = this.twoDigitToggle(firstPart);
                 if(firstPart[0] === 1){
                     innerResultArr.push(this.sixthLevelDetection(9));
                 }else{
                     innerResultArr.push(this.sixthLevelDetection(firstPart[firstPart.length -1]))
                 }
        }else if(firstPart.length === 3){
            innerResultArr = this.threeDigitToggle(firstPart);

                if(firstPart[1] === 1){
                    innerResultArr.push(this.sixthLevelDetection(9));
                }else{
                    innerResultArr.push(this.sixthLevelDetection(firstPart[firstPart.length -1]))
                }
        }

        innerResultArr.push(...this.thousandsToggle(secondPart));

        return innerResultArr
    }

    zeroToggle(inputValueArrNumbersCopy){
        let innerResultArr = [];
        if(inputValueArrNumbersCopy[inputValueArrNumbersCopy.length-2] === 1){
            innerResultArr = this.zeroLevelDetection(9);
        }else if(inputValueArrNumbersCopy.length-1 === 1){

        }else{
            innerResultArr = this.zeroLevelDetection(inputValueArrNumbersCopy[inputValueArrNumbersCopy.length-1])
        }

        return innerResultArr
    }

    pointDecadeToggle(inpValArrStrAfterPoint){
       let innerResultArr = [];
       console.log(inpValArrStrAfterPoint[0] === 1);
        if(inpValArrStrAfterPoint[0] === 1 || inpValArrStrAfterPoint[0] === 2){
            console.log(`here`);
            innerResultArr.push(this.minusfirstLevelDetection(inpValArrStrAfterPoint[0]));
        }else{
            innerResultArr.push(this.firstLevelDetection(inpValArrStrAfterPoint[0]));
            innerResultArr.push(this.minusfirstLevelDetection(inpValArrStrAfterPoint[0]));
        }
        return innerResultArr;
    }

    pointHundredToggle(inpValArrStrAfterPoint){
        let innerResultArr = [];
        // innerResultArr.push(...this.twoDigitToggle(inpValArrStrAfterPoint));
        if(inpValArrStrAfterPoint[0] === 0){
            if(inpValArrStrAfterPoint[1] === 1 || inpValArrStrAfterPoint[1] === 2){
                console.log(`here`);
                innerResultArr.push(this.minussecondLevelDetection(inpValArrStrAfterPoint[1]));
            }else{
                innerResultArr.push(this.firstLevelDetection(inpValArrStrAfterPoint[1]));
                innerResultArr.push(this.minussecondLevelDetection(inpValArrStrAfterPoint[1]));
            }
        }else{
            if(inpValArrStrAfterPoint[0] === 1){
                innerResultArr.push(...this.twoDigitToggle(inpValArrStrAfterPoint));
                innerResultArr.push(this.minussecondLevelDetection(9));
            }else{
                if(inpValArrStrAfterPoint[1] === 1 || inpValArrStrAfterPoint[1] === 2 ){
                    innerResultArr.push(...this.twoDigitToggle(inpValArrStrAfterPoint));
                    innerResultArr.pop();
                    innerResultArr.push(this.minussecondLevelDetection(inpValArrStrAfterPoint[1]));
                }else {
                    innerResultArr.push(...this.twoDigitToggle(inpValArrStrAfterPoint));
                    innerResultArr.push(this.minussecondLevelDetection(inpValArrStrAfterPoint[1]));
                }

            }

        }
        return innerResultArr
    }

    pointThousandToggle(inpValArrStrAfterPoint) {
        let innerResultArr = [];
        if (inpValArrStrAfterPoint[0] === 0 && inpValArrStrAfterPoint[1] === 0) {
            if (inpValArrStrAfterPoint[2] === 1 || inpValArrStrAfterPoint[2] === 2) {
                console.log(`here`);
                innerResultArr.push(this.minusthirdLevelDetection(inpValArrStrAfterPoint[2]));
            } else {
                innerResultArr.push(this.firstLevelDetection(inpValArrStrAfterPoint[2]));
                innerResultArr.push(this.minusthirdLevelDetection(inpValArrStrAfterPoint[2]));
            }
        }else{
            if(inpValArrStrAfterPoint[1] === 1){
                innerResultArr.push(...this.threeDigitToggle(inpValArrStrAfterPoint));
                innerResultArr.push(this.minusthirdLevelDetection(9));
            }else{
                innerResultArr.push(...this.threeDigitToggle(inpValArrStrAfterPoint));
                innerResultArr.pop();
                innerResultArr.push(this.minusthirdLevelDetection(inpValArrStrAfterPoint[2]));
            }
        }
        return innerResultArr
    }

    pointTenThousandToggle(inpValArrStrAfterPoint) {
        let innerResultArr = [];
        if (inpValArrStrAfterPoint[0] === 0 && inpValArrStrAfterPoint[1] === 0 && inpValArrStrAfterPoint[2] === 0) {
            if (inpValArrStrAfterPoint[3] === 1 || inpValArrStrAfterPoint[3] === 2) {

                innerResultArr.push(this.minusfourthLevelDetection(inpValArrStrAfterPoint[3]));
            } else {
                innerResultArr.push(this.firstLevelDetection(inpValArrStrAfterPoint[3]));
                innerResultArr.push(this.minusfourthLevelDetection(inpValArrStrAfterPoint[3]));
            }
        }else if(inpValArrStrAfterPoint[0] === 0){
                inpValArrStrAfterPoint.shift();
                // innerResultArr.push(...this.pointThousandToggle(inpValArrStrAfterPoint));
                    if (inpValArrStrAfterPoint[0] === 0 && inpValArrStrAfterPoint[1] === 0) {
                        if (inpValArrStrAfterPoint[2] === 1 || inpValArrStrAfterPoint[2] === 2) {
                            innerResultArr.push(this.minusfourthLevelDetection(inpValArrStrAfterPoint[2]));
                        } else {
                            innerResultArr.push(this.firstLevelDetection(inpValArrStrAfterPoint[2]));
                            innerResultArr.push(this.minusfourthLevelDetection(inpValArrStrAfterPoint[2]));
                        }
                    }else{
                        if(inpValArrStrAfterPoint[1] === 1){
                            innerResultArr.push(...this.threeDigitToggle(inpValArrStrAfterPoint));
                            innerResultArr.push(this.minusfourthLevelDetection(9));
                        }else{
                            innerResultArr.push(...this.threeDigitToggle(inpValArrStrAfterPoint));
                            innerResultArr.pop();
                            innerResultArr.push(this.minusfourthLevelDetection(inpValArrStrAfterPoint[2]));
                        }
                    }

        }else{
            if(inpValArrStrAfterPoint[2] === 1){
                innerResultArr.push(...this.thousandsToggle(inpValArrStrAfterPoint));
                innerResultArr.push(this.minusfourthLevelDetection(9));
            }else{
                if(inpValArrStrAfterPoint[3] === 1 || inpValArrStrAfterPoint[3] === 2){
                    let additionVar = inpValArrStrAfterPoint[3];
                    innerResultArr.push(...this.thousandsToggle(inpValArrStrAfterPoint));
                    innerResultArr.pop();
                    console.log(inpValArrStrAfterPoint);
                    innerResultArr.push(this.minusfourthLevelDetection(additionVar));
                }else{
                    let additionVar = inpValArrStrAfterPoint[3];
                    innerResultArr.push(...this.thousandsToggle(inpValArrStrAfterPoint));
                    console.log(inpValArrStrAfterPoint);
                    innerResultArr.push(this.minusfourthLevelDetection(additionVar));

                }

            }
        }

        return innerResultArr
    }




        getValue(){
        let ResultArr = [];
        let initialArrStrings = document.getElementById('left-input').value.split('');
        let inputValueArrStrings = [];
        let inpValArrStrAfterPoint = [];
        if(initialArrStrings.some(elem => elem === '.')){
           let joinString = initialArrStrings.join('').split('.');
           console.log(joinString);
            inputValueArrStrings = joinString[0].split('');
            inpValArrStrAfterPoint = joinString[1].split('');
        }else{
            inputValueArrStrings = initialArrStrings;
        }
        console.log(inputValueArrStrings);
        let inputValueArrNumbers = [];
        let inputValueArrNumbersCopy = [];
        let inpValArrNumAfterPoint = [];
        inputValueArrStrings.forEach( elem => {
            inputValueArrNumbers.push(parseInt(elem));
            inputValueArrNumbersCopy.push(parseInt(elem));
        });
        inpValArrStrAfterPoint.forEach( elem =>{
           inpValArrNumAfterPoint.push(parseInt(elem))
        });
        if(inputValueArrNumbers.length === 1) {
            ResultArr = this.oneDigitToggle(inputValueArrNumbers)
        }else if(inputValueArrNumbers.length === 2){
            ResultArr = this.twoDigitToggle(inputValueArrNumbers);
        }else if(inputValueArrNumbers.length === 3){
            ResultArr = this.threeDigitToggle(inputValueArrNumbers)
        }else if(inputValueArrNumbers.length > 3 && inputValueArrNumbers.length < 7){
            ResultArr = this.thousandsToggle(inputValueArrNumbers)

        }else if(inputValueArrNumbers.length > 6 && inputValueArrNumbers.length < 10){
            ResultArr = this.millionToggle(inputValueArrNumbers)
        }





        if(inpValArrStrAfterPoint.length !== 0){
            console.log(`this start arr ${inpValArrNumAfterPoint}`);
            inpValArrNumAfterPoint.reverse();

            for (let i = 0; i < inpValArrNumAfterPoint.length; i++) {
               if(inpValArrNumAfterPoint[i] === 0){
                   inpValArrNumAfterPoint.shift();
                   i = -1;
               }else{
                   break
               }
            }

            console.log(`this is minimised ${inpValArrNumAfterPoint}`);
            inpValArrNumAfterPoint.reverse();
            console.log(`this is finished ${inpValArrNumAfterPoint}`);


            if(inputValueArrNumbersCopy[inputValueArrNumbersCopy.length -1] === 1
                && inputValueArrNumbersCopy[inputValueArrNumbersCopy.length - 2] !== 1){
                ResultArr.pop();
            }else if(inputValueArrNumbersCopy[inputValueArrNumbersCopy.length -1] === 2
                && inputValueArrNumbersCopy[inputValueArrNumbersCopy.length - 2] !== 1){
                ResultArr.pop();
            }
            console.log(inputValueArrNumbersCopy);
           ResultArr.push(this.zeroToggle(inputValueArrNumbersCopy));
            if(inpValArrNumAfterPoint.length === 1){
                ResultArr.push(...this.pointDecadeToggle(inpValArrNumAfterPoint));
            }else if(inpValArrNumAfterPoint.length === 2){
                ResultArr.push(...this.pointHundredToggle(inpValArrNumAfterPoint));
            }else if(inpValArrNumAfterPoint.length === 3){
                ResultArr.push(...this.pointThousandToggle(inpValArrNumAfterPoint));
            }else if(inpValArrNumAfterPoint.length === 4){
                ResultArr.push(...this.pointTenThousandToggle(inpValArrNumAfterPoint));
            }
        }
        console.log(ResultArr);
        let OutputResult = ResultArr.join(' ');
        let output = document.getElementById('right-input');
        output.value = OutputResult;
    }

    render() {
        return (
            <div className='container'>
                <Input placeholder="Write your number please" id='left-input' />
                <Button type="primary" onClick={() =>{this.getValue()}} >Convert</Button>
                <TextArea rows={4} placeholder="Here your result appears" id='right-input'/>
            </div>
        );
    }
}

export default Interface;