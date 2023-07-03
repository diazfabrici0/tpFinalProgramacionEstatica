const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar); //cuando se clickea la ruleta, se llama a la funcion girar y ejecuta la cuncion
giros = 1;

function girar(){
    if(giros == 1){

        let rand = Math.random() * 7200; //genero un numero random entre 0 y 7200
        calcular(rand);
        
        giros = 0; // se establece giros en 0 para que no pueda girar la ruleta de vuelta

        var sonido = document.querySelector('#audio');
        sonido.setAttribute('src', 'sonido/sonidocsgo.mp3');
        document.querySelector('.turnos').innerHTML = 'TIROS: ' + giros; //se pone en el html el valor de la variable giros para que el usuario lo vea en pantalla
    }else{                                                                  
        Swal.fire({                                          //utilizo una biblioteca de alertas, que se muestra cuando el usuario quiere volver a girar la ruleta ya teniendo un descuento         
            icon: 'success',                                                
            title: 'Ya tiene su cupón de descuento',
            confirmButtonColor: '#8A2DED',
            confirmButtonText: 'Volver',
            allowOutsideClick: false
        }).then((result)=>{                
            if(result.value == true){
                giros = 0;
                document.querySelector('.suCupon').innerHTML = 'Tu descuento: -' + giros; //se pone en pantalla el descuento que le toco
                document.querySelector('.turnos').innerHTML = 'TIROS: ' + giros; //se actualiza el turno que le queda
            }
        })
    }

    function cupones(cupones){

        document.querySelector('.suCupon').innerHTML = 'Tu descuento: -'+ cupones + '%'; //setea ek descuento

    }

    //calcula el resultado del giro de la ruleta
    function calcular(rand){

        valor = rand/360; //calcula el valor dividiendolo por 360, 360 por los 360 grados que es 1 vuelta
        valor = (valor - parseInt(valor.toString().split(".")[0]))*360;
        console.log(valor);
        ruleta.style.transform = "rotate("+rand+"deg)"; //hace que la ruleta se mueva

        setTimeout(()=>{

            switch (true) {
                case valor > 0 && valor <= 45:
                    cupones(70); //se aplica un descuento de 70% si el valor esta entre 0 y 45
                    alert('Código de cupon: ABC123');

                    break;
            
                case valor > 45 && valor <= 90:
                    cupones(15); //se aplica un descuento de 15% si el valor esta entre 45 y 90
                    alert('Código de cupon: DEF456');
                    break;

                case valor > 90 && valor <= 135:
                    cupones(25); // se aplica un descuento de 25% si el valor esta entre 90 y 135
                    alert('Código de cupon: GHI789');
                    break;

                case valor > 135 && valor <= 180:
                    cupones(5); // se aplica un descuento de 5% si el valor esta entre 135 y 180
                    alert('Código de cupon: JKL012');
                    break;
            
                case valor > 180 && valor <= 225:
                    cupones(30); // se aplica un descuento de 30% si el valor esta entre 180 y 225
                    alert('Código de cupon: MNO345');
                    break;

                case valor > 225 && valor <= 270:
                    cupones(50); // se aplica un descuento de 50% si el valor esta entre 225 y 270
                    alert('Código de cupon: PQR678');
                    break;

                case valor > 270 && valor <= 315:
                    cupones(20); // se aplica un descuento de 20% si el valor esta entre 270 y 315
                    alert('Código de cupon: STU901');
                    break;

                case valor > 315 && valor <= 360:
                    cupones(10); // se aplica un descuento de 10% si el valor esta entre 315 y 360
                    alert('Código de cupon: VWX234');
                    break;

            }

        },7000);

    }

}