import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';
import { retry } from 'rxjs';
import { NOTFOUND } from 'node:dns';

@Injectable()
export class ProfilesService {
    private profiles = [
        {
        id: randomUUID(),
        name: "Brittany watts",
        description: "Looking for someone in the world"
        },
        {
        id: randomUUID(),
        name: "Derek Muller",
        description: "Seeking for the element of Veritas"
        },
        {
        id: randomUUID(),
        name: "Cody Islab",
        description: "Digging earth to find something"
        },
    ];

    findAll(){
        return this.profiles;
    };

    findOne(id: string){
        const matchingProfile = this.profiles.find((profile)=>{
            return profile.id === id
        });

        if(!matchingProfile){
            throw new Error(`Profile with id: ${id} not found`);
        }
        return matchingProfile;
    }

    create(person:CreateProfileDto){
        const newProfile = {
            id: randomUUID(),
            ...person
        }

        this.profiles.push(newProfile);
        return newProfile;
    }

    update(id: string,updatePerson:UpdateProfileDto){
        const matchingProfile = this.profiles.find((profile)=>{
            return profile.id == id
        });

        if (!matchingProfile) {
            throw new Error(`Profile with id: ${id} not found`)
        }

        matchingProfile.name = updatePerson.name? updatePerson.name : matchingProfile.name;
        matchingProfile.description = updatePerson.description? updatePerson.description : matchingProfile.description;

        this.profiles.push(matchingProfile)
        return this.profiles
    }

    remove(id:string){
        const idRemoveProfile = this.profiles.findIndex((profile)=>{
            return profile.id === id
        });

        if (idRemoveProfile === -1) {
            throw new Error(`Profile with id: ${id} not found`)        
        }
        
        this.profiles.splice(idRemoveProfile,1)
        return this.profiles;
    }
}
