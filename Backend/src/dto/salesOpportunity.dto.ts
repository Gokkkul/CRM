import { IsString, IsNumber, IsOptional, IsEnum, IsDate } from 'class-validator';

export class CreateSalesOpportunityDto {
    @IsString()
    stage: string;

    @IsNumber()
    value: number;

    @IsOptional()
    @IsDate()
    expectedCloseDate?: Date;

    @IsOptional()
    @IsString()
    notes?: string;

    @IsOptional()
    isDeleted?: number;
}

export class UpdateSalesOpportunityDto {
    @IsOptional()
    @IsString()
    stage?: string;

    @IsOptional()
    @IsNumber()
    value?: number;

    @IsOptional()
    @IsDate()
    expectedCloseDate?: Date;

    @IsOptional()
    @IsString()
    notes?: string;

    @IsOptional()
    isDeleted?: number;
}
