import { IsString, IsOptional, IsDate, IsEnum } from 'class-validator';

export class CreateInteractionDto {
    @IsString()
    type: string;

    @IsDate()
    date: Date;

    @IsOptional()
    @IsString()
    notes?: string;

    @IsOptional()
    @IsDate()
    followUpDate?: Date;

    @IsOptional()
    isDeleted?: number;
}

export class UpdateInteractionDto {
    @IsOptional()
    @IsString()
    type?: string;

    @IsOptional()
    @IsDate()
    date?: Date;

    @IsOptional()
    @IsString()
    notes?: string;

    @IsOptional()
    @IsDate()
    followUpDate?: Date;

    @IsOptional()
    isDeleted?: number;
}
