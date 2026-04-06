import 'dotenv/config';
import * as joi from'joi';

interface EnvVars{
    PORT:number;
}

//ToDo : Validar mediante un esquema(patron de diseño)

const envSchema =  joi.object({
    PORT:joi.number().required()
}).unknown(true);

const {error,value}=envSchema.validate(process.env);
const envVars:EnvVars=value;

if(error){
    throw new Error(`Config Validation ERROR ${error.message}` );
}

export const envs = {
    port:envVars.PORT as number,

}