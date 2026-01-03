// export default function TeamMemberItem({ member }) {
export default function TeamMemberItem({ name, role, avatar }) {
  return (
    <div>
      {/* <div>name : {member.name}</div>
      <div>role : {member.role}</div>
      <img src={member.avatar} /> */}
      <div>name : {name}</div>
      <div>role : {role}</div>
      <img src={avatar} />
    </div>
  );
}
