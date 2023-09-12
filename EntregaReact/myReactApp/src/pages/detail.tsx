import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetRickCharacter, GetMember } from "../services/GetInfoFromApi";
import { TableHeader } from "../components/TableHeader";
import { MemberEntity } from "../model";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

interface Props {
  rick?: boolean;
}

export const DetailPage: React.FC<Props> = (prop) => {
  const [member, setMember] = React.useState<MemberEntity[]>([]);
  const titles = ["Avatar", "Name"];
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (prop.rick) {
        await GetRickCharacter(id).then((resp) => setMember(resp.results));
      } else {
        const res = await GetMember(id);
        setMember([res]);
      }
    };
    fetchData();
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <h2>Hello from Detail page</h2>
      <div className="detailContainer">
        <TableHeader titles={titles} />
        {member.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            <Avatar
              sx={{ width: 80, height: 80 }}
              src={member[0].image ? member[0].image : member[0].avatar_url}
              alt="avatar"
            />
            <span>{member[0].name}</span>
          </>
        )}
      </div>
      <Button color="secondary" type="button" onClick={handleGoBack}>
        Back to list page
      </Button>
    </>
  );
};
