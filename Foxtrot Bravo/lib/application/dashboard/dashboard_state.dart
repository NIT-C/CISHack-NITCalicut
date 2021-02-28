part of 'dashboard_bloc.dart';

@freezed
abstract class DashboardState with _$DashboardState {
  const factory DashboardState({
    @required Option<List<Article>> articles,
  }) = _DashboardState;

  factory DashboardState.initial() {
    return DashboardState(articles: none());
  }
}
