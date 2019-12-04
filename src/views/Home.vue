<template>
  <div class="home" v-if="artists">
    <div v-for="artist of artists" :key="artist.key">
      <router-link
        :to="{
          name: artist.id ? 'artistById' : 'artistByName',
          params: artist,
        }"
      >
        {{ artist.name }}
      </router-link>
    </div>
  </div>
  <div v-else>
    {{ loading }}
  </div>
</template>

<script lang="ts">
type LastFmArtist = { id?: string; name: string; key: string }
import Maybe from 'graphql/tsutils/Maybe'
import { TopArtistsSmartQuery, TopArtistsQuery } from '@/generated'
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Home extends Vue {
  @TopArtistsSmartQuery({
    update({ topArtists }): Maybe<Array<LastFmArtist>> {
      return topArtists?.chart?.topArtists?.nodes?.map((node, i) => ({
        id: node?.mbid,
        name: node?.name || 'Anonymous',
        key: node?.mbid || `${i}`,
      }))
    },
  })
  public artists?: Array<LastFmArtist>
  get loading() {
    return this.$apollo.queries.artists.loading
  }
}
</script>
