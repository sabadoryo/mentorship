class Hero {
    gun = 'vandal';
    health = 151;
    killCount = 0;

    getHealth() {
        return this.health;
    }

    getUltimateAbilityButton() {
        return 'X';
    }

    incrementKillCount(killCount) {
        this.killCount++; 
    }
}