import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    PORT: number;
}

const envSchema = joi.object<EnvVars>({
    PORT: joi.number().required(),
}).unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
    throw new Error(`Error de configuración en el puerto: ${error.message}`);
}

const EnvVars: EnvVars = value;

export const envs = {
    PORT: EnvVars.PORT,
};