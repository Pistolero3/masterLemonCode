export interface MemberEntity {
  id: string;
  login?: string;
  avatar_url?: string;
  name?: string;
  species?: string;
  image: string;
  status?: string;
  location?: {
    name: string;
  };
}
