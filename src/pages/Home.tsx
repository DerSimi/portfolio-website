import { AboutMe } from '@/components /Home/AboutMe';
import { Education } from '@/components /Home/Education';
import { Interests } from '@/components /Home/Interests';
import { Profile } from '@/components /Home/Profile';
import { Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function Home() {
  const isSmUp = useMediaQuery('(min-width: 48em)'); // Mantine sm = 48em = 768px

  return (
    <Grid gutter="xl">
      {/* --- Profile Block --- */}
      <Grid.Col span={{ base: 12, lg: 3 }} style={{ alignSelf: 'flex-start', marginTop: '-1rem' }}>
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
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Interests />
          </Grid.Col>

          {/* "Education" nimmt die rechte Hälfte (6/12) der Reihe ein */}
          <Grid.Col
            span={{ base: 12, sm: 6 }}
            style={{
              marginLeft: isSmUp ? '-10rem' : 0,
              transition: 'margin-left 0.2s',
            }}
          >
            <Education />
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}