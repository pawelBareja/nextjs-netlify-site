export default function Copyright() {
  const today = new Date()
  return (
    <>
      <p>&copy; 2018 - { today.getFullYear()} Bareja Studio All Rights Reserved</p>
      <style jsx>
        {`
          p {
            font-size: 0.75rem;
            text-align: center;
            line-height:1.3;
            padding:5px;
          }
        `}
      </style>
    </>
  );
}
