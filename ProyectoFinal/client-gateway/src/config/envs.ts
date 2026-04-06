import 'dotenv/config';
import* as joi from 'joi';

interface EnvVars{
    PORT:number;
    DATABASE_URL: string;
    PRODUCT_SERVICE_HOST: string;
    PRODUCT_SERVICE_PORT: number;
    BOOKS_SERVICE_HOST: string;
    BOOKS_SERVICE_PORT: number;
    LOANS_SERVICE_HOST: string;
    LOANS_SERVICE_PORT: number;
}

const envSchema=joi.object({
    PORT:joi.number().required(),
    PRODUCT_SERVICE_HOST:joi.string().required(),
    PRODUCT_SERVICE_PORT:joi.number().required(),
    BOOKS_SERVICE_HOST:joi.string().required(),
    BOOKS_SERVICE_PORT:joi.number().required(),
    LOANS_SERVICE_HOST:joi.string().required(),
    LOANS_SERVICE_PORT:joi.number().required(),
    //DATABASE_URL: joi.string().required(),
}).unknown(true);

const{error,value}=envSchema.validate(process.env)

if(error){
    throw new Error(`Error de configuración: ${error.message} `)
}

const envVars:EnvVars=value;

export const envs={
    port:envVars.PORT,
    PRODUCT_SERVICE_HOST:envVars.PRODUCT_SERVICE_HOST,
    PRODUCT_SERVICE_PORT:envVars.PRODUCT_SERVICE_PORT,
    BOOKS_SERVICE_HOST:envVars.BOOKS_SERVICE_HOST,
    BOOKS_SERVICE_PORT:envVars.BOOKS_SERVICE_PORT,
    LOANS_SERVICE_HOST:envVars.LOANS_SERVICE_HOST,
    LOANS_SERVICE_PORT:envVars.LOANS_SERVICE_PORT,
   // database:envVars.DATABASE_URL
}

