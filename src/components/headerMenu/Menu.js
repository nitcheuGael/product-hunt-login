import CollectionIcon from '../../assets/images/nav-collections.avif';
import TopicIcon from '../../assets/images/nav-topics.avif';
import UpcomingIcon from '../../assets/images/nav-upcoming-products.avif';
import MenuItem from './MenuItem';

const Menu = () => {
    const productItems = [
        {
            title: 'Topics',
            icon: TopicIcon,
            description: 'Browse products through topic',
        },

        {
            title: 'Collection',
            icon: CollectionIcon,
            description: 'Products curated by the community',
        },
        {
            title: 'UpComming product',
            icon: UpcomingIcon,
            description: 'Products curated by the community',
        }
    ]

    const communityItems = [
        {
            title: 'Discussion',
            icon: CollectionIcon,
            description: 'Ask question, find support and connect',
        },
        {
            title: 'Stories',
            icon: CollectionIcon,
            description: 'Tech new, interviews and tips from makers',
        },
        {
            title: 'Makers Grant',
            icon: CollectionIcon,
            description: 'Giving back and supporting our community ',
        },
        {
            title: 'Events',
            icon: CollectionIcon,
            description: 'Find the best tech events around the world',
        },
        {
            title: 'Changlog',
            icon: CollectionIcon,
            description: 'Release note from the Product Hunt team',
        },
    ]

    const toolsItems = [
        {
            title: 'Founder Club',
            icon: CollectionIcon,
            description: 'Amazing daels to kickstart your stratup',
        },
        {
            title: 'Ship',
            icon: CollectionIcon,
            description: 'The toolkit made for Makers',
        },
    ]
    return (
        <>
            <MenuItem title='Products' body={productItems} href="#" />
            <MenuItem title='Community' body={communityItems} href="#" />
            <MenuItem title='Tools' body={toolsItems} href="#" />
            <MenuItem title='Jobs' />
            <MenuItem title='About' />
        </>

    );
};

export default Menu;