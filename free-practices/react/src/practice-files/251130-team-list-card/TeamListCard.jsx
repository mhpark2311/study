import TeamMemberItem from './TeamMemberItem';

export default function ({ items }) {
  const [member1, member2, member3] = items;
  return (
    <div className="team_member">
      {/* <TeamMemberItem member={member1} />
      <TeamMemberItem member={member2} />
      <TeamMemberItem member={member3} /> */}
      <TeamMemberItem {...member1} />
      <TeamMemberItem {...member2} />
      <TeamMemberItem {...member3} />
    </div>
  );
}
