import { Section } from '../components/Section';
import { useUser } from '../contexts/userContext';
import React from 'react';

export const UserProfileSection = () => {
    const { user, setUser } = useUser();

    const  [isCalculating, setIsCalculating] = React.useState(false);
    const quoteText = React.useMemo(
        () => {
            // This supposed to be a expensive calc operation
            setIsCalculating(true);
            setTimeout(() => setIsCalculating(false), 2000);

            return `${user.pet.name}, my ${user.pet.specie} is ${user.pet.age} yrs. `
        },
        [user.pet]
      );

    return <Section title="User Profile">
        <p>Fill your profile and get your free pet plate.</p>

        <div class="form-container">
            <input
                type="text"
                value={user.username}
                className="fun-input"
                placeholder="Username"
                onChange={(e) => setUser({...user, username: e.target.value})}
            />
            <input
                type="email"
                value={user.usermail}
                class="fun-input"
                placeholder="Email"
                onChange={(e) => setUser({...user, usermail: e.target.value})}
            />
            <input
                type="text"
                value={user.pet.name}
                class="fun-input"
                placeholder="Pet Name"
                onChange={(e) => setUser({...user, pet: {...user.pet, name: e.target.value}})}

            />
            <input
                type="text"
                value={user.pet.specie}
                class="fun-input"
                placeholder="Specie"
                onChange={(e) => setUser({...user, pet: {...user.pet, specie: e.target.value}})}
            />
            <input
                type="text"
                value={user.pet.age}
                class="fun-input"
                placeholder="Age"
                onChange={(e) => setUser({...user, pet: {...user.pet, age: e.target.value}})}
            />

        </div>
        <div class="quote-block">
            <p class="quote-text">{isCalculating ? "Loading plate.." : quoteText}</p>
        </div>
    </Section>
}