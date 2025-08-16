import { AboutMe } from '@/components /Home/AboutMe';
import { Education } from '@/components /Home/Education';
import { Interests } from '@/components /Home/Interests';
import { Profile } from '@/components /Home/Profile';
import { Grid, Paper, Text } from '@mantine/core';

export function Home() {
  return (
    <Grid gutter="xl">

      {/* --- Profile Block --- */}
      <Grid.Col span={{ base: 12, lg: 3 }}>
        <Profile />
      </Grid.Col>

      {/* --- Rechte, große Spalte --- */}
      <Grid.Col span={{ base: 12, lg: 9 }}>
        <Grid gutter="xl">
          {/* ERSTE REIHE: "About me" nimmt die volle Breite (12/12) ein */}
          <Grid.Col span={12}>
            <AboutMe />
          </Grid.Col>

          {/* ZWEITE REIHE: Teilt sich auf in Interests und Education */}

          {/* "Interests" nimmt die linke Hälfte (6/12) der Reihe ein */}
          {/* Responsiv: Auf kleinen Screens (base) volle Breite, ab sm die Hälfte */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Interests />
          </Grid.Col>


          {/* "Education" nimmt die rechte Hälfte (6/12) der Reihe ein */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Education />
          </Grid.Col>

        </Grid>
      </Grid.Col>

    </Grid>
  );
}