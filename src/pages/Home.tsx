import { Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AboutMeView } from '@/components /home/AboutMeView';
import { EducationView } from '@/components /home/EducationView';
import { Interests } from '@/components /home/Interests';
import { Profile } from '@/components /home/Profile';

export function Home() {
  const isSmUp = useMediaQuery('(min-width: 48em)'); // Mantine sm = 48em

  // TODO: marginLeft: isSmUp ? -60 : 0
  return (
    <Grid gutter="md" style={{ maxWidth: 1500 }}>
      <Grid.Col
        span={{ base: 12, lg: 3 }}
        style={{
          alignSelf: 'flex-start',
          marginTop: '-1rem',
          display: 'flex',
          justifyContent: isSmUp ? 'flex-start' : 'center'
        }}
      >
        <Profile />
      </Grid.Col>

      <Grid.Col span={{ base: 12, lg: 9 }} style={{ paddingLeft: isSmUp ? 25 : 0 }}>
        <Grid
          gutter="md"
          style={{
            maxWidth: 1000,
          }}
        >
          <Grid.Col span={12}>
            <AboutMeView />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Interests />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <EducationView />
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}
