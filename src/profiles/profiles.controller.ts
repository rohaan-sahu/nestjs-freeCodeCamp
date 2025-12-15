import { Controller, Get, Query, Param, Post, Body, Put} from '@nestjs/common';
import { Delete,HttpCode,HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

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
	findOne( @Param('id') id:string ){
		return this.profileService.findOne(id);
	};
	//POST /profiles
	@Post()
	create(@Body() createProfileDto: CreateProfileDto){
		return this.profileService.create(createProfileDto)
	};
	//PUT /profiles/id:
	@Put(':id')
	update(
		@Param('id') id: string,
		@Body() updateProfileDto:UpdateProfileDto){
		return this.profileService.update(id,updateProfileDto)
	};
	//DELETE /profiles/id:
	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	remove(@Param('id') id:string){
		return this.profileService.remove(id)
	};
}
