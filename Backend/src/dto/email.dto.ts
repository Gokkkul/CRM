import { IsString, IsOptional, IsBoolean, IsDate } from 'class-validator';

export class CreateEmailLogDto {
    @IsString()
    emailSubject: string;

    @IsString()
    emailBody: string;

    @IsString()
    recipient: string;

    @IsBoolean()
    isDeleted: boolean;
}

export class UpdateEmailLogDto {
    @IsOptional()
    @IsString()
    emailSubject?: string;

    @IsOptional()
    @IsString()
    emailBody?: string;

    @IsOptional()
    @IsString()
    recipient?: string;

    @IsOptional()
    @IsBoolean()
    isDeleted?: boolean;
}
