class Hero {
    gun = 'vandam';
    armor = 151;
    killCount = 0;

    getHealth() {
        return 100;
    }

    getUltimateAbilityButton() {
        return 'A';
    }

    incrementKillCount(killCount) {
        this.armor++; 
    }
}