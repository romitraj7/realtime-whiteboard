"use client";
import { useOrganizationList } from "@clerk/nextjs";
import Item from "./Item";

const List = () => {
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });

if(!userMemberships.data?.length) return null;
    return ( 
        <ul className="space-y-4">
            {userMemberships.data?.map((users)=> (
                <Item 
                    key={users.organization.id}
                    id={users.organization.id}
                    name={users.organization.name}
                    imageUrl={users.organization.imageUrl}
                />
            ))}
        </ul>
     );
}
 
export default List;