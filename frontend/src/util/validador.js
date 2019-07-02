class Validar{

    email(strEmail){

        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(strEmail)){
            return true;
        }
        else{
            return false;
        }
    }
}

var validar = new Validar();

export default validar
