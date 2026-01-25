type Profile = {
  username: string;
  bio: string | null;
  avatarUrl?: string;
}
function showProfile(profile: Profile): void {
  console.log(`Username: ${profile.username}`);
  console.log(`Bio: ${profile.bio ?? "No bio set"}`);
  console.log(`Avatar: ${profile.avatarUrl ?? "avatar not loaded"}`);
}

const profile1: Profile = {
  username: "user1",
  bio: null,
};
const profile2: Profile = {
  username: "user2",
  bio: "Hello, I'm user2!",
  avatarUrl: "2.png",
};

const profile3: Profile = {
  username: "user3",
  bio: null,
  avatarUrl: undefined,
};

showProfile(profile1);
showProfile(profile2);
showProfile(profile3);
// ❯ cd 1 - typescript - casestudies
// ❯ bun tsr ex -08.ts
// $ bun x tsc--noEmit && bun run "ex-08.ts"
// Username: user1
// Bio: No bio set
// Avatar: avatar not loaded
// Username: user2
// Bio: Hello, I'm user2!
// Avatar: 2.png
// Username: user3
// Bio: No bio set