import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:dartz/dartz.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';

import '../../domain/article/article.dart';
import '../../domain/article/i_articles.dart';

part 'dashboard_bloc.freezed.dart';
part 'dashboard_event.dart';
part 'dashboard_state.dart';

@injectable
class DashboardBloc extends Bloc<DashboardEvent, DashboardState> {
  DashboardBloc(this._articles) : super(DashboardState.initial());

  final IArticles _articles;

  @override
  Stream<DashboardState> mapEventToState(
    DashboardEvent event,
  ) async* {
    yield* event.map(initialEvent: (e) async* {
      final articles = await _articles.getListArticles();
      if (articles == null) {
        yield state.copyWith(articles: none());
      } else {
        yield state.copyWith(articles: some(articles));
      }
    });
  }
}
