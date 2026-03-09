
import Text from "../components/text";

interface HeaderProps{
    title: String;
    subTitle?: String;
}

export default function Header({
    title,
    subTitle
} : HeaderProps) {
    return (
        <div className="flex flex-col">
            <Text variant={"title-lg-bold"} className="text-gray-100 leading-8" >
                {title}
            </Text>
            <Text variant={"text-sm-regular"} className="text-gray-300 mt-4 leading-5" >
                {subTitle}
            </Text>
        </div>
    )
}