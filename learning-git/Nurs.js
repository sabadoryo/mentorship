class Hero {
    gun = 'vandal';
    armor = 150;
    killCount = 1000;

    getHealth() {
        return 100;
    }

    getUltimateAbilityButton() {
        return 'X';
    }

    incrementKillCount(killCount) {
        this.killCount++; 
    }
}