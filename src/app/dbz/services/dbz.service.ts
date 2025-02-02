import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface.ts';

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Goku',
            power: 10000
        },
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 8000
        }
    ];

    addCharacter(character: Character): void{
        const newCharacter = {
            id: uuid(),
            ...character
        };
        this.characters.push(newCharacter);
    }

    deleteCharacterById(id: string): void{
        this.characters = this.characters.filter(character => character.id !== id);
    }
    
}