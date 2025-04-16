import { IsString, IsEmail, IsEnum, IsOptional, Length } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @Length(1, 255)
    name: string;

    @IsEmail()
    @Length(1, 255)
    email: string;

    @IsString()
    @Length(6, 255)
    password: string;

    @IsEnum(['admin', 'employee'])
    role: string;

    @IsOptional()
    isDeleted?: number;
}

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @Length(1, 255)
    name?: string;

    @IsOptional()
    @IsEmail()
    @Length(1, 255)
    email?: string;

    @IsOptional()
    @IsString()
    @Length(6, 255)
    password?: string;

    @IsOptional()
    @IsEnum(['admin', 'sales_rep'])
    role?: string;

    @IsOptional()
    isDeleted?: number;
}
