import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';

@Controller('app') // rotas
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('hello')
  async getHello(@Body() body: any) {
    const { name, function: memberFunction } = body;

    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });

    return {
      member,
    };
  }
}
