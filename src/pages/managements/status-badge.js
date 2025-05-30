
const StatusBadge = ({ status }) => {
  const getStatusStyles = (status) => {
    if (typeof status !== 'string') {
      return 'bg-slate-500/20 text-slate-400 border-slate-500/30'; // default fallback style
    }

    switch (status.toLowerCase()) {
      case 'trained':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'in progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'disabled':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };


  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getStatusStyles(status)}`}>
      {status ?? 'Unknown'}
    </span>
  );
};

export default StatusBadge;