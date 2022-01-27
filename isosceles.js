function heighIT(side1,side2,side3){
    isosceles=false;
    if(side1==side2 && side3!=side1){
        isosceles=true;
        // console.log('Ok, es isosceles!!!');
    }else if(side1==side3 && side2!=side3){
        isosceles=true;
        // console.log('tambien es isosceles!!!');
    }else if(side2==side3 && side1!=side2){
        isosceles=true;
        // console.log('Es isosceles');
    }else{
        console.log('No es isosceles')
    }

    list=[side1,side2,side3]
    const ayb=new Set(list)
    const listayb=[...ayb]
    console.log(listayb)
    if (isosceles){
        const a=listayb[0];
        const b=listayb[1];
        const high=Math.sqrt(((a*a)-((b*b)/4)),2)
        console.log(high);
    }
    
}
// lado,lado,base
heighIT(6,6,8)