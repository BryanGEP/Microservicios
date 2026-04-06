import {Catch,RpcExceptionFilter,ArgumentsHost, UnauthorizedException,ExceptionFilter}from '@nestjs/common';
import { Observable,throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter{
    catch(exception: RpcException, host: ArgumentsHost){
        const ctx= host.switchToHttp();
        const response= ctx.getResponse();
        const rcpError= exception.getError();

        if(typeof (rcpError  === 'object' && 'status' in response && 'message' in response) ){
            const status=response.status;
            return response.status(status.json(rcpError));
        }
        response.status(400).json({
            status:400,
            message: rcpError
        });
        /*
        console.log({rcpError});   
        response.status(401).json({
            status:401,
            message: 'Hola mundo',
        })*/
    }
}