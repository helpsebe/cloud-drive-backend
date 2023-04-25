import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'bobos@mail.bo' })
  email: string;

  @ApiProperty({ default: 'Bob Obst' })
  fullName: string;

  @ApiProperty({ default: '123456' })
  password: string;
}
