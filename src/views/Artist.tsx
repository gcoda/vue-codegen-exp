import { Component, Vue } from 'vue-property-decorator'
import {
  LookupArtistSmartQuery,
  ArtistAlbumsSmartQuery,
  ArtistAlbumsQuery,
} from '@/generated'
@Component({})
export default class Artist extends Vue {
  @LookupArtistSmartQuery<Artist>({
    variables() {
      return {
        query: this.$route.params.name,
      }
    },
    update({ search }) {
      return search?.artists?.nodes?.find(() => true)?.mbid
    },
    skip() {
      // don`t lookup if have id, or name is missing
      return !!this.$route.params.id || !this.$route.params.name
    },
  })
  foundId?: string
  get id() {
    return this.foundId || this.$route.params.id
  }
  @ArtistAlbumsSmartQuery<Artist>({
    variables() {
      return {
        artistId: this.id,
      }
    },
    skip() {
      return !this.id
    },
  })
  lookup?: ArtistAlbumsQuery['lookup']
  render() {
    return (
      <div>
        <b>{this.$apollo.loading ? 'loading' : 'finished'}</b>
        {this.lookup?.artist?.releaseGroups?.nodes?.map(release => (
          <div>
            <hr />
            <h2>{release?.title}</h2>
            <h2>{release?.firstReleaseDate}</h2>
            <div>
              {release?.discogs?.images
                ?.slice(0, 1)
                ?.map(thumbUrl => (
                  <img src={thumbUrl.thumbnail}></img>
                ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}
