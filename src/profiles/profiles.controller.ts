import { Controller, Get, Query, Param, Post, Body, Put,} from '@nestjs/common';
import { ParseUUIDPipe,UseGuards} from "@nestjs/common"
import { Delete,HttpCode,HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import { ProfilesGuard } from './profiles.guard';
import { UUID } from 'node:crypto';

@Controller('profiles')
export class ProfilesController {
	constructor(private profileService:ProfilesService){}

	//GET /profiles
	@Get()
	findAll(@Query('location') location: string){
		return this.profileService.findAll();
	}
	//GET /profiles/:id
	@Get(':id')
	findOne( @Param('id',ParseUUIDPipe) id: UUID ){
		try{
			return this.profileService.findOne(id);
		}catch(error){
			throw new NotFoundException(error.message);
		}
	};
	//POST /profiles
	@Post()
	create(@Body() createProfileDto: CreateProfileDto){
		try{
			return this.profileService.create(createProfileDto)
		}catch(error){
			throw new Error(error.message);
		}
	};
	//PUT /profiles/id:
	@Put(':id')
	update(
		@Param('id',ParseUUIDPipe) id: UUID,
		@Body() updateProfileDto:UpdateProfileDto){
			try{	
				return this.profileService.update(id,updateProfileDto)
			}catch(error){
				throw new NotFoundException(error.message)
			};
	};
	//DELETE /profiles/id:
	@Delete(':id')
	@UseGuards(ProfilesGuard)
	@HttpCode(HttpStatus.NO_CONTENT)
	remove(@Param('id',ParseUUIDPipe) id: UUID){
		try{
			return this.profileService.remove(id)
		}catch(error){
			throw new NotFoundException(error.message);
		}
	};
}
