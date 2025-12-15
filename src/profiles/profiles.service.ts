import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';
import { retry } from 'rxjs';

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
        return this.profiles.find((profile)=>{
            return profile.id === id
        })
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
        const a = this.profiles.find((profile)=>{
            return profile.id == id
        });

        if (!a) {
            return{}
        }

        a.name = updatePerson.name? updatePerson.name : a.name;
        a.description = updatePerson.description? updatePerson.description : a.description;

        this.profiles.push(a)
        return this.profiles
    }

    remove(id:string){
        const idRemoveProfile = this.profiles.findIndex((profile)=>{
            return profile.id === id
        });

        if (idRemoveProfile > -1) {
            this.profiles.splice(idRemoveProfile,1)
            return this.profiles
        }
        return {}
    }
}
