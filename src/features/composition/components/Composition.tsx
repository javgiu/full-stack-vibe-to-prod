import { Divider } from "../../../components/Divider";
import { Tag } from "../../../components/Tag";
import { FeatureContainer } from "../../featureContainer/components/FeatureContainer";

export function Composition() {
    return (
        <div>
            <FeatureContainer
                className="flex flex-col items-center text-center gap-7"
                title="Composition">
                <p>
                    This is some dumb text for dumb components: Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Mollitia vitae
                    praesentium, omnis, adipisci animi illum modi reprehenderit
                    debitis in dolor voluptatibus voluptas rerum quisquam
                    corrupti officiis similique delectus magni. Et!
                </p>
                <Divider className="w-full h-3 bg-slate-800 border-0 rounded-lg" />
                <div className="flex gap-8 w-full">
                    <Tag text="React"></Tag>
                    <Tag text="React"></Tag>
                    <Tag text="React"></Tag>
                </div>
            </FeatureContainer>
        </div>
    );
}
