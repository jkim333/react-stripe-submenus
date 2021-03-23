import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products/payment' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/products/terminal' },
      { label: 'connect', icon: <FaCreditCard />, url: '/products/connect' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugin', icon: <FaBook />, url: '/developers/plugin' },
      { label: 'libraries', icon: <FaBook />, url: '/developers/libraries' },
      { label: 'help', icon: <FaBook />, url: '/developers/help' },
      { label: 'billing', icon: <FaBook />, url: '/developers/billing' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/company/about' },
      { label: 'customers', icon: <FaBriefcase />, url: '/company/customers' },
    ],
  },
];

export default sublinks;
