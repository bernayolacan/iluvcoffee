import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get('flavors')     
    findAll() {
        return 'This action returns all coffees';
    }
    @Get(':id')
    findOne(@Param('id') id:string) {
        return `This actions returns #${id} coffee`; 
    }
    @Post()
    create (@Body() body) {
        return body;
        //return `This action creates a coffee`;  
    }
}
