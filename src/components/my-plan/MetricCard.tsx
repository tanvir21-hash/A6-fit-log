interface IMetricCardProps {
  label: string;
  value: number;
  highlight?: boolean; 
}

const MetricCard = ({ label, value, highlight = false }: IMetricCardProps) => {
  return (
    <div className="px-6 py-5">
      <p className="text-xs text-muted">{label}</p>
      <p className={`font-display text-4xl font-bold ${highlight ? "text-primary" : "text-white"}`}>
        {value}
      </p>
    </div>
  );
};

export default MetricCard;
