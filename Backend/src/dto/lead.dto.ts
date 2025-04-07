import { IsString, IsEmail, IsOptional, IsBoolean, IsEnum, Length } from 'class-validator';

export class CreateLeadDto {
    @IsString()
    @Length(1, 255)
    name: string;

    @IsEmail()
    @Length(1, 255)
    email: string;

    @IsOptional()
    @IsString()
    @Length(1, 15)
    phone?: string;

    @IsEnum(['new', 'contacted', 'qualified'])
    @IsString()
    status: string;

    @IsOptional()
    @IsString()
    @Length(1, 255)
    assignedTo?: string;

    @IsOptional()
    @IsString()
    @Length(1, 255)
    source?: string;

    @IsBoolean()
    isDeleted: boolean;
}

export class UpdateLeadDto {
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
    @Length(1, 15)
    phone?: string;

    @IsOptional()
    @IsEnum(['new', 'contacted', 'qualified'])
    status?: string;

    @IsOptional()
    @IsString()
    @Length(1, 255)
    assignedTo?: string;

    @IsOptional()
    @IsString()
    @Length(1, 255)
    source?: string;

    @IsOptional()
    @IsBoolean()
    isDeleted?: boolean;
}
