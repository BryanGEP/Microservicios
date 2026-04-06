import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
    catch(exception: RpcException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const rpcError = exception.getError();

        // Verificar si rpcError es un objeto con status y message
        if (
            typeof rpcError === 'object' && 
            rpcError !== null &&
            'status' in rpcError && 
            'message' in rpcError
        ) {
            const status = (rpcError as any).status;
            return response.status(status).json(rpcError);
        }

        // Respuesta por defecto si no tiene la estructura esperada
        return response.status(400).json({
            status: 400,
            message: rpcError
        });
    }
}